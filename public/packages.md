## Debian packages

Sparqlify Debian packages can be obtained by following means:
* Via the [Linked Data Stack](http://stack.linkeddata.org) (recommended)
* Download from the [Sparqlify website's download section](http://sparqlify.org/downloads/releases).
* Directly from source using maven (read down the README)

### Public repositories

After setting up any of the repositories below, you can install sparqlify with apt using

* apt: `sudo apt-get install sparqlify-cli

#### Linked Data Stack (this is what you want)

Sparqlify is distributed at the [Linked Data Stack](http://stack.linkeddata.org), which offers many great tools done by various contributors of the Semantic Web community.

* The repository is available in the flavors `nightly`, `testing` and `stable` [here](http://stack.linkeddata.org/download/repo.php).

```bash
# !!! Replace stable with nightly or testing as needed !!!

# Download the repository package
wget http://stack.linkeddata.org/ldstable-repository.deb

# Install the repository package
sudo dpkg -i ldstable-repository.deb

# Update the repository database
sudo apt-get update
```


#### Bleeding Edge (WARNING: Do not use this for production!!!)
For the latest development version (built on every commit) perform the following steps

Create the file

    /etc/apt/sources.list.d/cstadler.aksw.org.list

and add the content

    deb     http://cstadler.aksw.org/repos/apt precise main contrib non-free

Import the public key with

    wget -O - http://cstadler.aksw.org/repos/apt/conf/packages.precise.gpg.key | apt-key add -


Note that this also works with distros other than "precise" (ubuntu 12.04) such as ubuntu 14.04.
