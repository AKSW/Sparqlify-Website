## Building
Building the repository creates the JAR files providing the `sparqlify-*` tool suite.


### Debian package
Building debian packages from this repo relies on the [Debian Maven Plugin](http://debian-maven.sourceforge.net]) plugin, which requires a debian-compatible environment.
If such an environment is present, the rest is simple:

    # Install all shell scripts necessary for creating deb packages
    sudo apt-get install devscripts

    # Execute the follwing from the `<repository-root>/sparqlify-core` folder:
    mvn clean install deb:package

    # Upon sucessful completion, the debian package is located under `<repository-root>/sparqlify-core/target`
    # Install using `dpkg`
    sudo dpkg -i sparqlify_<version>.deb

    # Uninstall using dpkg or apt:
    sudo dpkg -r sparqlify
    sudo apt-get remove sparqlify


### Assembly based
Another way to build the project is run the following commands at `<repository-root>`

    mvn clean install

    cd sparqlify-core
    mvn assembly:assembly


This will generate a single stand-alone jar containing all necessary dependencies.
Afterwards, the shell scripts under `sparqlify-core/bin` should work.
