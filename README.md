# campus_restaurant_manager
Manage all the aspects of your restaurant and the information related to your dishes,reservations, etc...

## For deploying

Requirement:
- To have docker desktop for the deployment
- To have docker desktop (might be included to docker desktop)

1. You have to move through your shell into the project folder (where the docker-compose.yml file is):
   ```
   > pwd
   /Users/alvaropr/Documents/Git/campus_restaurant_manager
   >ls -l
   total 56
   -rw-r--r--   1 alvaropr  staff  20145 Dec 12 19:00 LICENSE
   -rw-r--r--   1 alvaropr  staff    498 Dec 12 19:17 README.md
   drwxr-xr-x  10 alvaropr  staff    320 Dec 12 18:22 backend
   drwx------@ 26 alvaropr  staff    832 Dec 12 18:33 data
   -rw-r--r--   1 alvaropr  staff   1260 Dec 12 18:22 docker-compose.yml
   drwxr-xr-x  13 alvaropr  staff    416 Nov 26 23:49 frontend
   ```

2. Run the command to start the infrastructure:
   ```
   docker compose up --build
   ```

3. You can access to the application at: "http://localhost/"