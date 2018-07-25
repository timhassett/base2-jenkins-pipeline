pipeline {
    agent any
    stages {
        stage('Build Docker Image') {
          steps {
            sh 'docker build -t timhassett/my-node-app ./docker/'
          }
        }

    }
}
