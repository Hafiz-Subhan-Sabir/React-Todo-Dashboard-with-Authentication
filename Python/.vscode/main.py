class school:
    def __init__(self,c,s):
        self.c = c
        self.s = s
    def welcome(self):
        print("Welcome To All "+str(self.s)+" Students.")

class Principle(school):
    def __init__(self,c,s,P_name):
        super().__init__(c,s)
        self.P_name = P_name
    def introduce(self):
        print("Hi Everybody I'm Your New Principle And My name is "+self.P_name+" . Thank You ! ")
    
s = school(10,200)
print(s.welcome())
p = Principle(10,200,"Hafiz Subhan")
print(p.welcome())
print(p.introduce())
