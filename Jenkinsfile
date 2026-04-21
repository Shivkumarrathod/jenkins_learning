pipeline {
    agent any

    environment {
        IMAGE_NAME = 'jenkins-app'
        IMAGE_TAG  = "${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
                echo "successfully checked out code from repository"
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    docker stop ${IMAGE_NAME} || true
                    docker rm   ${IMAGE_NAME} || true
                    docker run -d --name ${IMAGE_NAME} -p 3000:3000 ${IMAGE_NAME}:${IMAGE_TAG}
                '''
            }
        }
    }

    post {
        success {
            echo "Pipeline succeeded — app running on port 3000"
        }
        failure {
            echo "Pipeline failed — check the logs above"
        }
        always {
            echo "Build #${BUILD_NUMBER} finished"
        }
    }
}
