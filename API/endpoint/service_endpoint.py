from flask import make_response, request
from flask_restful import Resource


from db import session
from model import ServiceModel
from schema import ServiceSchema


class UserEndpoint(Resource):

    def get(self):

        expression = dict(request.args.items())

        user_model = ServiceModel()

        users = user_model.get_by_id(expression)

        user_jsons = user_model.jsonify(ServiceSchema, users, many=True)

        return make_response(user_jsons, 200)
    

    def post(self):
        user = request.get_json()

        new_user = ServiceModel(user)

        session.add(new_user)

        session.commit()

        user_schema = ServiceSchema()

        user_json = user_schema.dump(new_user)

        return make_response(user_json, 201)
    

    def put(self):
        user = request.get_json()

        user_id = user.get('id')

        existing_user = session.query(ServiceModel).filter_by(id=user_id).first()

        if existing_user:

            existing_user.title = user.get('title')

            existing_user.image = user.get('image')

            existing_user.description = user.get('description')

            session.commit()

            user_schema = ServiceSchema()

            user_json = user_schema.dump(existing_user)

            return make_response(user_json, 200)
        else:
            return make_response({"message": "User not found"}, 404)


    def delete(self, user_id):
        
        service_model = ServiceModel({"id": user_id})

        service_model.delete()


        return make_response({}, 204) 