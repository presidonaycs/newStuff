# API PAYLOAD SAMPLES FOR role

## SAMPLE DATA FOR CREATING AN role
--------------------------------------

Request payload;

role Creation
```
endpoint: /role
header: { 'Content-Type': 'application/json' }
method: POST
body: {
	"role": "Special Guest",
	"description": "For us to always enjoy",
	"createdBy": 4
}
```

Response payload;
```
status code: 200
for successful response:
{
  "code": 1,
  "status": "success",
  "message": "You have successfully created a role named 'Special Guest'."
}

for errors:
{
  "code": 2, 400
  "status": "general_error",
  "message": "descriptive message for bad request..."
}
{
  "code": 3, 401
  "status": "auth_error",
  "message": "descriptive message for authentication error..."
}
{
  "code": 4, 404
  "status": "not_found_error",
  "message": "descriptive message for not found..."
}
{
  "code": 5, 500
  "status": "server_error",
  "message": "descriptive message for server error..."
}
```

## SAMPLE DATA FOR GETTING A SINGLE role
--------------------------------------

Request payload;
```
endpoint: /role/{id}
header: { 'Content-Type': 'application/json' }
method: GET
```

Response payload;
```
status code: 200
for successful response:
{
	"code": 1,
	"data": {
		"id": 3,
		"role": "Special Guest",
		"description": "For us to always enjoy",
		"createdBy": "Efosa John",
		"createdAt": "2020-02-20 15:40:46.7937450",
		"updatedBy": null,
    	"updatedAt": null,
	}
}

for error:

```

## SAMPLE DATA FOR GETTING A LIST OF roles
--------------------------------------

Request payload;
```
endpoint: /role?query="search text" // role name
header: { 'Content-Type': 'application/json' }
method: GET
```

Response payload;
```
status code: 200
for successful response:
{
	"code": 1,
	"data": [
		{
			"id": 3,
			"role": "Special Guest",
			"description": "For us to always enjoy",
			"createdBy": "Efosa John",
			"createdAt": "2020-02-20 15:40:46.7937450",
			"updatedBy": null,
			"updatedAt": null,
		},
		...
	]
}

for error:

```

## SAMPLE DATA FOR UPDATING AN role
--------------------------------------

Request payload;

Profile Creation
```
endpoint: /role/{id}
header: { 'Content-Type': 'application/json' }
method: PATCH
body: {
	"id": 3,
	"role": "Special Guest",
	"description": "For us to always enjoy",
	"updatedBy": 4
}
```

Response payload;
```
status code: 200
for successful response:
{
  "code": 1,
  "status": "success",
  "message": "You have successfully updated a role named 'Special Guest'."
}
```

## SAMPLE DATA FOR DELETING AN EMPLOYEE PROFILE DETAILS
--------------------------------------

Request payload;
```
endpoint: /role/{id}
header: { 'Content-Type': 'application/json' }
method: DELETE
```

Response payload;
```
status code: 200
for successful response:
{
	"code": 1,
	"status": "success",
	"message": "You have successfully deleted a role named 'Special Guest'.
}

for error:

```
