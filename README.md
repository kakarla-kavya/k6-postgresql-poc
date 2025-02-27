# DB Load Testing Poc using Xk6-Postgresql
### Prerequisites
Before you begin, make sure you have the following tools installed:

- **k6** (with the `xk6-postgresql` extension)
- **Go** (to build a custom k6 binary with the PostgreSQL extension)
- **PostgreSQL** database (can be local or remote)

1. Clone repository:
   ``` bash 
   git clone git@github.com:kakarla-kavya/k6-api-load-testing-poc.git  
   ```
2. Install the K6 using below command  
    ```bash 
    brew install k6 
    ``` 
3. Install Go using below command 
   ```bash 
    brew install go 
    ``` 
4. Install node 
    ``` bash
    brew install node
    ```
5. Install xk6-Postgresql driver using below command 
    ```bash  
      xk6 build --with github.com/grafana/xk6-sql@latest --with github.com/grafana/xk6-sql-driver-postgres@latest
    ```    

 ### Running test
 1. Run test
     ``` bash  
       npm test <<filename>>
     ```