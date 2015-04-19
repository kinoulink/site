module.exports = {
    git_push: "git add . --all && git commit -am \"Work work\" && git push",
    deploy: 'rsync -az --exclude=".DS_Store" ./app/dist/ k-public.cloudapp.net:/home/kinoulink/app/public'
};