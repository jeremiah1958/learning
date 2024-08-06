class Novel:
    def __init__(self, name, writer, identifier):
        self.name = name
        self.writer = writer
        self.identifier = identifier
        self.checked_out = False
    
    def check_out(self):
        if not self.checked_out:
            self.checked_out = True
            print(f"The novel '{self.name}' has been checked out.")
        else:
            print(f"The novel '{self.name}' is currently checked out.")
    
    def return_novel(self):
        if self.checked_out:
            self.checked_out = False
            print(f"The novel '{self.name}' has been returned.")
        else:
            print(f"The novel '{self.name}' was not checked out.")
    
    def __repr__(self):
        status = 'Checked Out' if self.checked_out else 'Available'
        return f"Novel[Name: {self.name}, Writer: {self.writer}, Identifier: {self.identifier}, Status: {status}]"
