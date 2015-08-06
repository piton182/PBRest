# PBRest

## Getting Started

### Prerequisites:
* Nodejs
* npm install -g http-server

### Clone PBRest 
In a new terminal window
```
git clone https://github.com/SafeCodee/PBRest.git
cd PBRest
```
### Checkout branch
We have three branches:
* backdrop
* seat
* constraints_groups
```
git checkout [branchName]
```

### Rest server
```
cd server
npm install
node app
```
### Static content server
In a new terminal window
```
cd ../httpserver/
http-server -a localhost -p 3001
```
### Client
In a new terminal window
```
cd ../client/
http-server -a localhost -p 3002
```
Got to [http://localhost:3002](http://localhost:3002)
