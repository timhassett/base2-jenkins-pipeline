pipeline {
    agent any
    stages {
        stage('Build Docker Image') {
          steps {
            echo 'Building docker image...'
            //sh 'docker build -t timhassett/my-node-app ./docker/'
            docker.build("docker/")
          }
        }
        stage('Test Docker Image') {
            steps {
                echo 'Testing docker image...'
                //sh 'docker rm $(docker ps -aq) -f'
                //sh 'docker run -d -p 8080:3000 timhassett/my-node-app'
                //sh 'curl localhost:8080'
                //sh 'docker rm $(docker ps -aq) -f'
                docker.image('timhassett/my-node-app').app.withRun('-p 8080:3000') {
                    sh 'node --version'
                    sh 'curl localhost:3000'
                }
            }
        }
        stage('Publish Docker Image')
            steps {
                echo 'Publishing docker image...'
            }
    }
}
