# API PAYLOAD SAMPLES FOR AUTHENTICATION

## SAMPLE DATA FOR SIGN-IN APIs
--------------------------------------

Request payload;
```
endpoint: /auth/signin
header: { 'Content-Type': 'application/json' }
method: POST
body: {
	"email": "emmanuel.effiong@gmail.com",
	"password": "pass11111",
}
```

Response payload;
```
for successful response:
{
  "code": 200,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImRuIjoiQ049T2x1a3VubGUgQWJvbGFkZSxPVT1IZWFkIE9mZmljZSxPVT1HZW5lcmFsIFVzZXJzLERDPXdlbWFiYW5rLERDPWxvY2FsIiwic0FNQWNjb3VudE5hbWUiOiJPbHVrdW5sZS5BYm9sYWRlIiwiZGlzcGxheU5hbWUiOiJPbHVrdW5sZSBBYm9sYWRlIiwiZ2l2ZW5OYW1lIjoiT2x1a3VubGUiLCJzbiI6IkFib2xhZGUiLCJ0aXRsZSI6IkJhbmtpbmcgT2ZmaWNlciIsImRlcGFydG1lbnQiOiJIZWFkIE9mZmljZSIsInN0cmVldEFkZHJlc3MiOiJXZW1hIFRvd2VycywgNTQgTWFyaW5hLCBMYWdvcyIsIm1haWwiOiJPbHVrdW5sZS5BYm9sYWRlQFdlbWFiYW5rLmNvbSIsIm1vYmlsZSI6IjA4MDMwNDM0NTcyIiwibWlkZGxlTmFtZSI6IklzaG1hZWwuR3lhYmFuIiwicGh5c2ljYWxEZWxpdmVyeU9mZmljZU5hbWUiOiJIRUFEIE9GRklDRSIsImNvbXBhbnkiOiIwODQ4MSIsImJyYW5jaCI6IkdlbmVyYWwgVXNlcnMiLCJncmFkZSI6IkJPIn0sImlkIjoiUnZTYTdZaWVBIiwiaWF0IjoxNTc0MDc0OTg1LCJleHAiOjE1NzQwOTI5ODV9.VrvqoAU8EMCU-E3TpE62oiVbkyzDotQUjI4XdZojNAM",
  "user": {
    "userId": "jdfknj43i40ce-43f3c4",
    "firstName": "Emmanuel",
    "lastName": "Effiong",
    "email": "emmanuel.effiong@gmail.com",
    "phoneNumber": "08099999999",
    "profileImage": "filepath/imagename.jpg"
  }
}

for error:
{
	"error": {
		"code": 400,
		"message": "Descriptive error message."
	}
}
```

## SAMPLE DATA FOR FORGET PASSWORD APIs
--------------------------------------

### For generate token;

request payload:
```
endpoint: /auth/forget-password/generate-token
header: { 'Content-Type': 'application/json' }
method: POST
body: {
	"email": "user@email.com"
}
```
response payload:
```
for success:
{
	"code": 200,
	"message": "Password reset token successfully generated."
}
for error:
{
	"error": {
		"code": 404,
		"message": "The information you entered does not match our records."
	}
}
```

### For confirming token;

request payload:
```
endpoint: /auth/forget-password/confirm-token
header: { 'Content-Type': 'application/json' }
method: POST
body: {
	"email": "user@yahoomail.com",
	"token": "00000000"
}
```

response payload:
```
for success:
{
    "code": 200,
    "message": "Password reset token successfully confirmed for the current user."
}
for error:
{
	"error": {
		"code": 401,
		"message": "Invalid token"
	}
}
```

### For resetting the password after confirming the token;

request payload:
```
endpoint: /auth/forget-password/reset-password
header: { 'Content-Type': 'application/json' }
method: POST
body: {
	"email": "user@email.com",
	"newPassword": "sample123",
	"confirmPassword": "sample123"
}
```

response payload:
```
for success:
{
    "code": 200,
    "message": "Password reset successfully. Please login with your new password."
}
for error:
{
	"error": {
	    "code": 400,
	    "message": "Password mismatch."
	}
}
```
