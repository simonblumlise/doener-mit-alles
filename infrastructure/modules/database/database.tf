resource "kubernetes_secret" "MONGO_CREDENTIALS" {
  metadata {
    name = "mongo-credentials"
    namespace = var.namespace
  }
  data = {
    USERNAME = var.mongo_username
    PASSWORD = var.mongo_password
  }
}

resource "kubernetes_secret" "VIMEO_MONGO_DB" {
  metadata {
    name = "vimeo-mongo-db"
    namespace = var.namespace
  }
  data = {
    CONNECTION_STRING = "mongodb://${var.mongo_username}:${var.mongo_password}@${kubernetes_service.doener_mongo_db.metadata[0].name}:27017/test"
  }
}

resource "kubernetes_deployment" "doener_mongo_db" {
  metadata {
    name = "doener-mongo-db"
    namespace = var.namespace
    labels = {
      app = "doener"
      tier = "database-mongodb"
    }
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = "doener"
        tier = "database-mongodb"
      }
    }

    template {
      metadata {
        labels = {
          app = "doener"
          tier = "database-mongodb"
        }
      }

      spec {
        container {
          image = "mongo:6.0"
          name  = "doener-mongo-db"
          env_from {
            prefix = "MONGO_INITDB_ROOT_"
            secret_ref {
              name = kubernetes_secret.MONGO_CREDENTIALS.metadata[0].name
            }
          }
          volume_mount {
            mount_path = "/data/db"
            name = "mongodb-volume"
          }
        }
        volume {
          name = "mongodb-volume"
          persistent_volume_claim {
            claim_name = kubernetes_persistent_volume_claim.mongodb_volume_claim.metadata[0].name
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "doener_mongo_db" {
  metadata {
    name = "doener-mongo-db"
    namespace = var.namespace
  }
  spec {
    selector = kubernetes_deployment.doener_mongo_db.metadata[0].labels
    type = "ClusterIP"
    port {
      port = 27017
      target_port = 27017
    }
  }
}

resource "kubernetes_persistent_volume_claim" "mongodb_volume_claim" {
  metadata {
    name = "mongodb-volume-claim"
    namespace = var.namespace
  }
  spec {
    access_modes = ["ReadWriteOnce"]
    resources {
      requests = {
        storage = "5Gi"
      }
    }
  }
}