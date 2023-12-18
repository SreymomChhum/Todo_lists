from db import session


class BaseModel:
    def __init__(self):
        self._session = session
        self._query = self.get_query()

    def _commit(self):
        self._session.commit()

    def get_query(self):
        return self._session.query(self.__class__)

    def get(self, id):
        return self._query.filter(self.__class__.id == id).one()
    
    def add(self):
        self._session.add(self)
        self._commit()
        

    def update(self):
        self._query.filter(self.__class__.id == self.id).update(
            {
                k: v
                for  k, v in self.__dict__.items()
                if not k.startswith("_")
                and k not in ["_sa_instance_state", "_session", "_query"]
            }
        )
        self._commit()

    # def update_status(self):

    #     self.__query.filter(self.__class__.id == self.id).update(
    #         {
    #             self.__class__.status: self.status
    #         }
    #     )
    #     self._commit()


    def delete(self):
        self._session.query(self.__class__).filter(
            self.__class__.id == self.id
        ).delete()
        self._commit()
        
    def get_none(self):
        return self._query.filter(self.__class__.id == id).one_or_none()

    def get_all(self):
        return self._query.all()
    
    def get_by_id(self, expression):
        return self._query.filter_by(**expression).all()
    
    def jsonify(self, schema, model, **kwargs):
        return schema(**kwargs).dump(model)
    

