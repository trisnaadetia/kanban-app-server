# KANBAN

### Register user

Return json new user in kanban

* URL
		
	/register
		
* Method
	
	Post

* URL Params

	None

* Request Body

	username:string
	email:string
	password:string

* Success Response:

		* Code: 201
			Content:

			{
				"id": ".....",

				"username": ".....",

				"email": "......",

				"updatedAt": ".......",

				"createdAt": "......"
			}

* Error Response:

		* Code: 400
			Content:

			based on validation error sequelize:

			{

				"message": [

					"username must be required",

					"input must be format email",

					"password length should be minimum 6 characters"

				]

			}

		* Code: 500
			Content:

				{

					"message": based on error sequelize message || "Internal Server Error"

				}
---
### Login User

Return json user token

* URL
		
	/login
		
* Method
	
	Post

* URL Params

	None

* Request Body

	email:string
	password:string

* Success Response:

		* Code: 200
			Content:

			{
				"id": ".....",

				"email": "......",

				"access_token": "......"

			}

* Error Response:

		* Code: 400
			Content:

			{

				"message": "invalid Password or email"
				
			}

		* Code: 500
			Content:

				{

					"message": based on error sequelize message || "internal Server Error"

				}
---
### Show Tasks

Return json data all tasks

* URL
		
	/tasks
		
* Method
	
	Get

* URL Params

	None

* Headers
	
	access_token

* Request Body

	None

* Success Response:

		* Code: 200
			Content:

					{

						"id": "....",

						"title": "....",

						"description": "....",

						"CategoryId": "....",
						
						"UserId": "....",

						"due_date": "....",

						"createdAt": "....",

						"updatedAt": "...."

						"Category": {

							"id": "....",

							"name": "....",

							"createdAt": "....",

							"updatedAt": "...."
			
						}

						"User": {

							"id": "....",

							"username": "....",

							"email": "....",

							"password": "....",

							"createdAt": "....",

							"updatedAt": "...."
			
						}

					}
					
* Error Response:

		* Code: 401
			Content:

				{

					"message": "unauthorized"
					
				}

		* Code: 500
			Content:

				{

					"message": based on error sequelize message || "internal Server Error"

				}
	
	---
### Create Task

Return json new data task

* URL
		
	/tasks
		
* Method
	
	Post

* URL Params

	None

* Headers
	
	access_token

* Request Body

	title:string
	description:string
	CategoryId:integer
	due_date:string

* Success Response:

		* Code: 201
			Content:

				{

					"id": ".....",

					"title": ".....",

					"description": ".....",

					"CategoryId": ".....",

					"UserId": ".....",

					"due_date "......",

					"updatedAt "......",

					"createdAt"......."

				}	
								
* Error Response:

		* Code: 400
			Content:

				based on validation error sequelize:

					{

					"message": [

							"title must be required",

							"description must be required",

							"category must be required",

							"check your input date",

							"date must be required",

							"input must be formated date"
						]

					}
				
		* Code: 500
			Content:

				{

					"message": based on error sequelize message || "internal Server Error"

				}

---
### Show Task By Id

Return json data task based on Id

* URL
		
	/tasks/:id
		
* Method
	
	Get

* URL Params

	id=[integer]

* Headers
	
	access_token

* Request Body

	None

* Success Response:

		* Code: 200
			Content:

					{

						"id": "....",

						"title": "....",

						"description": "....",

						"CategoryId": "....",

						"due_date": "....",

						"UserId": "....",

						"createdAt": "....",

						"updatedAt": "...."

					}
					
* Error Response:

		* Code: 401
			Content:

				{

					"message": "unauthorized"
					
				}

		* Code: 404
			Content:

				{

					"message": "error not found"
					
				}

		* Code: 500
			Content:

				{

					"message": based on error sequelize message || "internal Server Error"

				}

---
### Update Task By Id

Return json data task updated based on Id

* URL
		
	/tasks/:id
		
* Method
	
	Update

* URL Params

	id=[integer]

* Headers
	
	access_token

* Request Body

	title:string
	description:string
	CategoryId:integer
	due_date:string

* Success Response:

		* Code: 200
			Content:

					{

						"id": "....",

						"title": "....",

						"description": "....",

						"CategoryId": "....",

						"due_date": "....",

						"UserId": "....",

						"createdAt": "....",

						"updatedAt": "...."

					}
					
* Error Response:

		* Code: 400
			Content:

				based on validation error sequelize:

					{

					"message": [

							"title must be required",

							"description must be required",

							"category must be required",

							"check your input date",

							"date must be required",

							"input must be formated date"
						]

					}

		* Code: 401
			Content:

				{

					"message": "unauthorized"
					
				}

		* Code: 404
			Content:

				{

					"message": "error not found"
					
				}

		* Code: 500
			Content:

				{

					"message": based on error sequelize message || "internal Server Error"

				}

---

### Patch Task By Id

Return json data task patched based on Id

* URL
		
	/tasks/:id
		
* Method
	
	Patch

* URL Params

	id=[integer]

* Headers
	
	access_token

* Request Body

	CategoryId:integer
	
* Success Response:

		* Code: 200
			Content:

					{

						"id": "....",

						"title": "....",

						"description": "....",

						"CategoryId": "....",

						"due_date": "....",

						"UserId": "....",

						"createdAt": "....",

						"updatedAt": "....",

					}
					
* Error Response:

		* Code: 400
			Content:

				based on validation error sequelize:

					{

						"message": [

								"category must be required"
		
							]

					}

		* Code: 401
			Content:

				{

					"message": "unauthorized"
					
				}

		* Code: 404
			Content:

				{

					"message": "error not found"
					
				}

		* Code: 500
			Content:

				{

					"message": based on error sequelize message || "internal Server Error"

				}

---
### Delete Task By Id

Return json information delete
* URL
		
	/tasks/:id
		
* Method
	
	Delete

* URL Params

	id=[integer]

* Headers
	
	access_token

* Request Body

	None
	
* Success Response:

		* Code: 200
			Content:

					{

						message : 'task success deleted'
						
					}
					
* Error Response:

		* Code: 401
			Content:

				{

					"message": "unauthorized"
					
				}

		* Code: 404
			Content:

				{

					"message": "error not found"
					
				}

		* Code: 500
			Content:

				{

					"message": based on error sequelize message || "internal Server Error"

				}








