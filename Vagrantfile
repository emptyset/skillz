Vagrant.configure('2') do |config|
	config.vm.box = "ubuntu/precise64"
	config.vm.network :private_network, ip: "192.168.33.10"
    config.vm.network "forwarded_port", guest: 3000, host: 8080
	config.vm.provision :shell, path: "provision.sh", privileged: true

	config.vm.provision :shell, path: "project-bootstrap.sh", privileged: false

	config.push.define "production", strategy: "heroku" do |push|
		push.app = ""
	end
end
