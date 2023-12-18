from marshmallow import Schema, fields


class ServiceSchema(Schema):
    id = fields.Int()
    title = fields.Str()
    image = fields.Str()
    status = fields.Boolean()
    description = fields.Str()
