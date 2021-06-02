# Docker 101

## Build & Run docker image locally

Have docker installed on your workstation.
Use a linux-like shell (e.g. git bash for Windows users).

Build:

```bash
docker build . (to name the image: docker build -t <image-name> .)
```

Find the IMAGE_ID, look for the recently created:

```bash
docker images
```

Run locally:

```bash
docker run -it --rm -p 8085:8080 --mount type=bind,source="$(pwd)/tmp/",target=/var/cache/nginx/ --mount type=bind,source="$(pwd)/tmp/",target=/var/run/ <IMAGE_ID>
```

Navigate to <http://localhost:8085/>

## Push the image to docker hub

You need to have docker hub account. A free account is good enough.

If you docker hub username is "foobar", then:

login to docker hub:

```bash
docker login foobar
```

tag the image:
(docker-user/repository-name:tag-name)

```bash
docker tag <IMAGE_ID> foobar/nginx:foosbal-score-keeper
```

push the image:

```bash
docker push foobar/nginx:foosbal-score-keeper
```

## Build kubernetes (k8s) objects

### Edit configs

Edit the `k8s/overlays/linode-lke/kustomization.yaml` file, add
your own values.

Change this:

```bash
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

```bash
kubectl kustomize k8s/overlays/linode-lke/ > app.yaml
```

Or using `kustomize`:

```bash
kustomize build k8s/overlays/linode-lke/ > app.yaml
```

Apply to your k8s cluster:

```bash
kubectl apply -f app.yaml
```
