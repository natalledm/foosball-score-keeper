# Foosball Score Keeper

A score keeper for foosball game. It has two kinds of options for a game: by a max point and by 2.

## Purpose

This was done only for a learning purpose.

## Tech stack

- HTML
- JavaScript
- [Bulma](https://bulma.io/)




## Build & Run docker image locally

Have docker installed on your workstation. 
Use a linux-like shell (e.g. git bash for Windows users).

Build:
```
docker build .
```

Find the IMAGE_ID, look for the recently created:
```
docker images
```

Run locally:
```
docker run -it --rm -p 8085:8080 --mount type=bind,source="$(pwd)/tmp/",target=/var/cache/nginx/ --mount type=bind,source="$(pwd)/tmp/",target=/var/run/ <IMAGE_ID>
```

Navigate to <http://localhost:8085/>



## Push the image to docker hub

You need to have docker hub account. A free account is good enough.

If you docker hub user name is "foobar", then:

login to docker hub:
```
docker login foobar
```

tag the image:
```
docker tag <IMAGE_ID> foobar/nginx:foosbal-score-keeper
```

push the image:
```
docker push foobar/nginx:foosbal-score-keeper
```




## Build kubernetes (k8s) objects

### Edit configs

Edit the `k8s/overlays/linode-lke/kustomization.yaml` file, add
your own values.

Change this:
```
images:
  - name: some-image
    newName: 0x6170/nginx
    newTag: foosbal-score-keeper
```
to reflect your docker hub username and docker image location, i.e. 
change `0x6170/nginx` to your own `foobar/nginx`

Edit any other values according to your cloud provider specs.

Other existing values are good enough to run on Linode Kubernetes Engine (LKE).

### Build & Apply

Using `kubectl`:
```
kubectl kustomize k8s/overlays/linode-lke/ > app.yaml
```

Or using `kustomize`:
```
kustomize build k8s/overlays/linode-lke/ > app.yaml
```

Apply to your k8s cluster:
```
kubectl apply -f app.yaml
```

