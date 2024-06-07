pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'soa-baby-steps'
    }

    stages {
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
                    docker.image(DOCKER_IMAGE).inside('-u root') {
                        sh 'npm install --unsafe-perm'
                        sh 'npm run test'
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    docker.image(DOCKER_IMAGE).run('-p 8081:8081')
                }
            }
        }
    }
}