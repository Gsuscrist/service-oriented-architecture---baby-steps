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
                    docker.image(DOCKER_IMAGE).inside {
               
                        sh 'npm test'
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Ensure any previous container is stopped and removed
                    sh 'docker stop soa-baby-steps || true'
                    sh 'docker rm soa-baby-steps || true'

                    // Run the new container
                    docker.image(DOCKER_IMAGE).run('-d -p 8001:8001 --name soa-baby-steps')
                }
            }
        }
    }
}
