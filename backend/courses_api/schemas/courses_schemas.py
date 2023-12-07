from marshmallow import fields, validates, ValidationError

class CoursesSchema:
    
    title = fields.String(required=True)
    description = fields.String(required=True)
    image = fields.String(required=True)
    rating = fields.Float(required=True)

    
    @validates('title') 
    def validate_title(self, value):
        if len(value) < 5:
            raise ValidationError('Title must be at leat 5 characters long.')#Validate de length of title
        
    @validates('description')
    def validate_description(self, value):
        if len(value) < 6:
            raise ValidationError('Author must be at leat 6 characters long.') #Validate de length of description 
    
    @validates('image')
    def validate_image(self,value):    
        allowed_extensions = ['.png', '.jpg']
        if not any(value.endswith(ext) for ext in allowed_extensions): #check if file, ends with .jpg, .png extension
            raise ValidationError('File must must be .png or .jpg. extension')

        
    