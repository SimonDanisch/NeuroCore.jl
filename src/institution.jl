
"Name of the institution in charge of the equipment that produced the composite instances."
@defprop InstitutionName{:institution_name}::String

"The department in the institution in charge of the equipment that produced the composite instances."
@defprop InstitutionalDepartmentName{:institutional_department_name}::String

"The address of the institution in charge of the equipment that produced the composite instances."
@defprop InstitutionAddress{:institution_address}::String

struct InstitutionInformation
    name::String
    department::String
    address::String
end

@properties InstitutionInformation begin
    institution_name(self) => :name
    institutional_department_name(self) => :department
    institution_address(self) => :address
end

"""
    InstitutionInformation 

Metadata structure for general MRI sequence information.
"""
InstitutionInformation
