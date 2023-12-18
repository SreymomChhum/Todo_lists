from marshmallow import Schema, fields


class ServiceSchema(Schema):
    id = fields.Int()
    title = fields.Str()
    image = fields.Str()
    description = fields.Str()
