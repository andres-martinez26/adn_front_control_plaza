pipeline {
  //Donde se va a ejecutar el Pipeline
  agent {
    label 'Slave_Induccion'
  }

  //Opciones específicas de Pipeline dentro del Pipeline
  options {
        buildDiscarder(logRotator(numToKeepStr: '3'))
     disableConcurrentBuilds()
  }

  //Aquí comienzan los “items” del Pipeline
  stages {
    stage('Checkout') {
      steps {
        echo '------------>Checkout<------------'
        checkout([
            $class: 'GitSCM',
            branches: [[name: '*/master']],
            doGenerateSubmoduleConfigurations: false,
            extensions: [],
            gitTool: 'Default',
            submoduleCfg: [],
            userRemoteConfigs: [[
            credentialsId: 'GitHub_andres-martinez26',
            url:'https://github.com/andres-martinez26/adn_front_control_plaza.git'
            ]]
        ])
      }
    }

    stage('Prepare Node and NPM') { // confirm nodejs plugin and setting
      env.NODEJS_HOME = "${tool 'nodejs-14.17.5'}"
      env.PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"
      sh 'npm --version'
    }

    stage('Prepare Angular CLI') { // install global angular cli
      sh 'npm -g install @angular/cli'
      sh 'ng --version'
    }

    stage('Prepare Angular Project') { // prepare angular adn_front_control_plaza app
      sh 'if [ ! -d adn_front_control_plaza ]; then ng new adn_front_control_plaza --style less; fi'
    }

    stage('Build Angular Project') { // build angular adn_front_control_plaza app
      sh 'cd adn_front_control_plaza && npm install && npm run build'
    }

    stage('Jasmine Unit Test') { // Unit Test
      sh 'export CHROME_BIN=/usr/bin/chromium-browser && cd adn_front_control_plaza && ng test --code-coverage'
    }

    stage('Static Code Analysis') {
      steps {
        echo '------------>Análisis de código estático<------------'
        withSonarQubeEnv('Sonar') {
              sh "${tool name: 'SonarScanner', type:'hudson.plugins.sonar.SonarRunnerInstallation'}/bin/sonar-scanner -Dproject.settings=sonar-project.properties"
        }
      }
    }

  post {
    always {
      echo 'This will always run'
    }
    success {
      echo 'This will run only if successful'
    //si la ruta existe se ejecuta correctamente
    }
    failure {
      echo 'This will run only if failed'
      mail (to: 'andres.martinez@ceiba.com.co',
      subject: "Failed Pipeline:${currentBuild.fullDisplayName}",
      body: "Something is wrong with ${env.BUILD_URL}")
    }
    unstable {
      echo 'This will run only if the run was marked as unstable'
    }
    changed {
      echo 'This will run only if the state of the Pipeline has changed'
      echo 'For example, if the Pipeline was previously failing but is now successful'
    }
  }
  }
}
