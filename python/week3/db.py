import mysql.connector

from mysql.connector import Error

import pandas as pd


def create_connection(host_name,user_name,password,db_name):
    connection = None
    try:
        connection = mysql.connector.connect(
            host = host_name,
            user = user_name,
            passwd = password,
            database = db_name
            
        )
        print("MySQL has been successful")
    except Error as error:
        print(f"Error: {error}")  
         
    return connection



def delete_database(connection, query):
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        print("Database delete successfully")
        
    except Error as error:
        print(f"Error: {error}")
        
#query = "DROP database test"       

# database = delete_database(connection, query)
     
 #query = "CREATE database school"
 #create_database(connection, query)  
def execute_query(connection, query):
     cursor = connection.cursor() 
     try:
         cursor.execute(query)
         connection.commit()
         print("query successful")
     except Error as error:
         print(f"Error: {error}")     
 
# create_tables = """
# #CREATE TABLE teacher (
#  #   teacher_id INT PRIMARY KEY,
#   #  first_name VARCHAR(40) NOT NULL,
#    # last_name VARCHAR(40) NOT NULL,
#     #bob DATE,
#     #hone_no VARCHAR(13)
# #); 
# #"""        

# connection = create_connection("localhost", "root","", "school")
# execute_query(connection, create_tables)

# create_table_client = """
# CREATE TABLE client (
#     client_id INT PRIMARY KEY,
#     client_name VARCHAR(40) NOT NULL,
#     industry VARCHAR(20)
    
# );
# """

# connection = create_connection("localhost", "root", "", "school")
# execute_query(connection, create_table_client)


create_table_course = """
CREATE TABLE course (
    course_id  INT PRIMARY KEY,
    course_name  VARCHAR(40) NOT NULL,
    level VARCHAR(2),
    start_date DATE,
    teacher INT,
    client INT
    
)
"""

connection = create_connection("localhost", "root", "", "school")
execute_query(connection, create_table_course)