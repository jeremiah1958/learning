class SoftStaff:
    companyName = 'Space X' #class variable
    
    def __init__(self, pSalary):
        self.salary = pSalary #instance variable
        
    def printInfo(self): #instance method
        print("Company name is", SoftStaff.companyName)
        print("Salary is", self.salary)
      
# instances 
SoftStaff.companyName = 'Microsoft'
shawn = SoftStaff(280000)
Joan = SoftStaff(170000)

shawn.salary = 300000

# print(shawn.salary)
shawn.printInfo()