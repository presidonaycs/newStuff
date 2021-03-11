# API PAYLOAD SAMPLES FOR MDA

## SAMPLE DATA FOR CREATING AN MDA
--------------------------------------

Request payload;

MDA Creation
```
endpoint: /mda
header: { 'Content-Type': 'application/json' }
method: POST
body: {
	"mda": "Ministry Of Enjoyment",
	"purposeOfEstablishment": "For us to always enjoy",
	"dateOfEstablishment": "2020-11-21",
	"address": "plot 3 Adeola estate,
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
  "message": "You have successfully created an mda named 'Ministry Of Enjoyment'."
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

## SAMPLE DATA FOR GETTING A SINGLE MDA
--------------------------------------

Request payload;
```
endpoint: /mda/{id}
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
		"mda": "Ministry Of Enjoyment",
		"purposeOfEstablishment": "For us to always enjoy",
		"dateOfEstablishment": "2020-11-21",
		"address": "plot 3 Adeola estate,
		"createdBy": "Efosa John",
		"createdAt": "2020-02-20 15:40:46.7937450",
		"updatedBy": null,
    	"updatedAt": null,
	}
}

for error:

```

## SAMPLE DATA FOR GETTING A LIST OF MDAs
--------------------------------------

Request payload;
```
endpoint: /mda?query="search text" // mda name
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
			"mda": "Ministry Of Enjoyment",
			"purposeOfEstablishment": "For us to always enjoy",
			"dateOfEstablishment": "2020-11-21",
			"address": "plot 3 Adeola estate,
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

## SAMPLE DATA FOR UPDATING AN MDA
--------------------------------------

Request payload;

Profile Creation
```
endpoint: /mda/{id}
header: { 'Content-Type': 'application/json' }
method: PATCH
body: {
	"id": 3,
	"mda": "Ministry Of Enjoyment",
	"purposeOfEstablishment": "For us to always enjoy",
	"dateOfEstablishment": "2020-11-21",
	"address": "plot 3 Adeola estate,
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
  "message": "You have successfully updated an mda named 'Ministry Of Enjoyment'."
}
```

## SAMPLE DATA FOR DELETING AN EMPLOYEE PROFILE DETAILS
--------------------------------------

Request payload;
```
endpoint: /mda/{id}
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
	"message": "You have successfully deleted an MDA named 'Ministry of Enjoyment'.
}

for error:

```
