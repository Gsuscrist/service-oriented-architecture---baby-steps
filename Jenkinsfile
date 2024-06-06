pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'soa-baby-steps'
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Gsuscrist/service-oriented-architecture---baby-steps.git'
            }
        }
        stage('Build') {
            steps {
                script {
                    docker.build(DOCKER_IMAGE)
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    docker.image(DOCKER_IMAGE).inside {
                        sh 'npm install'
                        sh 'npm test'
                    }
                }
            }
        }
    }
    post {
        always {
            script {
                docker.image(DOCKER_IMAGE).inside {
                    sh 'npm cache clean --force'
                    sh 'rm -rf node_modules'
                }
            }
        }
    }
}
