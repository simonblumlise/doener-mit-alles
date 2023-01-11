terraform {
  backend "kubernetes" {
    namespace = "l-doener-mit-alles-state"
    secret_suffix = "doener-mit-alles-prod"
    config_context = "lise-aks-cluster"
    load_config_file = true
  }
  required_providers {
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "2.8.0"
    }
  }
}
#module "backend" {
#  source = "../../modules/backend"
#  image  = "liseinternal.azurecr.io/lise/doener/backend:prod"
#  mongodb_host = "localhost"
#  namespace = "l-doener-mit-alles-prod"
#}

module "database" {
  source = "../../modules/database"
  namespace = "l-doener-mit-alles-prod"
  mongo_password = ""
  mongo_username = ""
}

