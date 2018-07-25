pipeline {
    agent any
    stages {
        stage('Build docker image') {
          steps {
            sh 'docker build -t timhassett/my-node-app ./docker/'
          }
        }
        stage('Test docker image') {
            steps {
                sh 'docker run -d -p 8080:3000 timhassett/my-node-app'
                sh 'curl localhost:8080'
                sh 'docker rm ${docker ps -aq)'
            }
        }
    }
}
