pipeline {
    agent any
    stages {
        stage('Build Docker Image') {
            steps {
                echo 'Building docker image...'
                script {
                    docker.build("timhassett/my-node-app", "./docker/")    
                }
            }
        }
        stage('Test Docker Image') {
            steps {
                echo 'Testing docker image...'
                script {
                    docker.image('timhassett/my-node-app').app.withRun('-p 8080:3000') {
                        sh 'node --version'
                        sh 'curl localhost:3000'
                    }
                }
            }
        }
        stage('Publish Docker Image') {
            steps {
                echo 'Publishing docker image...'
            }
        }
    }
}
