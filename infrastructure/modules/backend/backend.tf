resource "kubernetes_deployment" "doener_backend" {
  metadata {
    name = "backend"
    namespace = var.namespace
    labels = {
      app = "doener"
      tier = "backend"
    }
  }
  spec {
    replicas = 1
    selector {
      match_labels = {
        app = "doener"
        tier = "backend"
      }
    }
    template {
      metadata {
        labels = {
          app = "doener"
          tier = "backend"
        }
      }
      spec {
        container {
          image = var.image
          image_pull_policy = "Always"
          name  = "backend"
          port {
            name = "http"
            container_port = 80
          }
          env {
            name = "SPRING_DATA_MONGODB_HOST"
            value = var.mongodb_host
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "doener_backend" {
  metadata {
    name = "doener_backend"
    namespace = var.namespace
  }
  spec {
    selector = kubernetes_deployment.doener_backend.metadata[0].labels
    type = "ClusterIP"
    port {
      port = 80
      target_port = "http"
      name = "http"
    }
  }
}