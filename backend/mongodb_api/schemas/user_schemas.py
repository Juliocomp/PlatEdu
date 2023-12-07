from marshmallow import fields, validates, ValidationError

class UserSchema:
    email = fields.String(required=True)
    pasword = fields.String(required=True)
    name= fields.String(required=False)
    image=fields.String(required=False)

    @validates('email')
    def validate_email(self, value):
        if value.count('@')<1 or value.count('@')>1:
            raise ValidationError('email is not valid.')
        
    @validates('pasword')
    def validate_pasword(self, value):
        if len(value) < 8:
            raise ValidationError('Pasword must be at leat 8 characters long.')
        
    @validates('name')
    def validate_name(self, value):
        if len(value) < 5:
               raise ValidationError('Name must be at leat 5 characters long')
    
    @validates('image')
    def validate_name(self, value):
        if value.count('.jpg')<1 or value.count('.jpg')>1 :
               raise ValidationError('The image must be in jpg format')
