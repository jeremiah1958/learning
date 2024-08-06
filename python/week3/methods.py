class MethodDemo:
    a = 1
    
    @classmethod
    def classM(cls):
        print("Classs method cls.a = ", cls.a)
        
    @staticmethod
    def staticM():
        print("Static method")
        
# MethodDemo.classM()
# md1 = MethodDemo()
# md1.classM()
# md1.staticM()
MethodDemo.staticM()