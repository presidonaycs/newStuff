# API PAYLOAD SAMPLES FOR EMPLOYEE ONBOARDING

## SAMPLE DATA FOR CREATING A PROFILE APIs
--------------------------------------

Request payload;

Profile Creation
```
endpoint: /employee/profile
header: { 'Content-Type': 'application/json' }
method: POST
body: {
	"firstName": "Emmanuel",
	"lastName": "Effiong",
	"email": "emmanuel.effiong@gmail.com",
	"mda": 3, // id for "Ministry of Finance"
	"role": [ 2, 4,...],
	"gender": "male"
}
```

Response payload;
```
status code: 200
for successful response:
{
  "code": 1,
  "status": "success",
  "message": "You have successfully created a profile for 'Emmanuel Effiong'. His password will be sent to his email address"
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

## SAMPLE DATA FOR GETTING AN EMPLOYEE PROFILE DETAILS
--------------------------------------

Request payload;
```
endpoint: /employee/profile/{email}
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
		"id": 2,
		"firstName": "Emmanuel",
		"lastName": "Effiong",
		"email": "emmanuel.effiong@gmail.com",
		"profilePicture": "https://path-to-the-image",
		"mda": 3, // id for "Ministry of Finance"
		"role": [ { "id": 2, "name: "Clark" },...],
		"gender": "male",
		"currentLevel": "level-2",
		"salaryAccountNumber": "9883373883",
		"salaryDomiciledBank": "Union Bank",
		"nin": "0994847474884",
		"bvn": "9884884484",
		"staffId": "DE44334",
		"title": "Mr",
		"dob": "1986-10-21",
		...
	}
}

for error:

```

## SAMPLE DATA FOR GETTING A LIST OF EMPLOYEE PROFILES
--------------------------------------

Request payload;
```
endpoint: /employee/profile?query="search text" // firstname and lastname or email address
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
			"id": 2,
			"firstName": "Emmanuel",
			"lastName": "Effiong",
			"email": "emmanuel.effiong@gmail.com",
			"mda": 3, // id for "Ministry of Finance"
			"role": [ { "id": 2, "name: "Clark" },...],
			"gender": "male"
		},
		...
	]
}

for error:

```

## SAMPLE DATA FOR UPDATING AN EMPLOYEE PROFILE
--------------------------------------

Request payload;

Profile Creation
```
endpoint: /employee/profile
header: { 'Content-Type': 'application/json' }
method: PATCH
body: {
	"id": 2,
	"firstName": "Emmanuel",
	"lastName": "Effiong",
	"email": "emmanuel.effiong@gmail.com",
	"mda": 3, // id for "Ministry of Finance"
	"role": [2, 6, ...], // id for "Clark",
	"gender": "male"
}
```

Response payload;
```
status code: 200
for successful response:
{
  "code": 1,
  "status": "success",
  "message": "You have successfully created a profile for 'Emmanuel Effiong'. His password will be sent to his email address"
}
```

## SAMPLE DATA FOR UPDATING AN EMPLOYEE PROFILE DETAILS
--------------------------------------

Request payload;

Profile Creation
```
endpoint: /employee/details
header: { 'Content-Type': 'application/json' }
method: PATCH
body: {
	"id": 2,
	"firstName": "Emmanuel",
	"lastName": "Effiong",
	"email": "emmanuel.effiong@gmail.com",
	"profilePicture": "https://path-to-the-image",
	"mda": 3, // id for "Ministry of Finance"
	"role": [2, 6, ...], // id for "Clark",
	"gender": "male",
	"currentLevel": "level-2",
	"salaryAccountNumber": "9883373883",
	"salaryDomiciledBank": "Union Bank",
	"nin": "0994847474884",
	"bvn": "9884884484",
	"staffId": "DE44334",
	"title": "Mr",
	"dob": "1986-10-21",
	...
}
```

Response payload;
```
status code: 200
for successful response:
{
  "code": 1,
  "status": "success",
  "message": "You have successfully created a profile for 'Emmanuel Effiong'. His password will be sent to his email address"
}
```

## SAMPLE DATA FOR DELETING AN EMPLOYEE PROFILE DETAILS
--------------------------------------

Request payload;
```
endpoint: /employee/profile/{email}
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
	"message": "You have successfully delete a profile for 'Emmanuel Effiong'.
}

for error:

```
