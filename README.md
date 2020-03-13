# WorkoutDiary-Frontend
This is the source of my workout diary frontend react application. 
This application can be pulled from docker hub, or feel free to clone and build it yourself.

Example docker run command:
docker run -d -p 80:80 -e BACKEND_URI="your backend uri" larsl123/workoutdiaryfrontend

##### Deployment:

When deploying with docker, expose port 80. 

When running the docker image, the application expects the following enviroment variables:
BACKEND_URI -The uri the application should connect to.

##### Development:

The project is set up so that every commit is tested with Circle Ci.
All commits to the master branch must be tested on another branch before merging.
Commits to master will trigger a build, which runs react-build and updates the docker image. 

##### Links:

Pre-built image: https://hub.docker.com/repository/docker/larsl123/workoutdiaryfrontend
Circle-CI testing: https://circleci.com/gh/LarsL123/WorkoutDiary-Frontend