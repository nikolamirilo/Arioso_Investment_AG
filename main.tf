terraform {
  reqired_providers {
      netlify = {
            source = "hashicorop/netlify",
            version = "1.0"
      }
  }
}

variable "netlify_token" {
      type=string
      default = ""
}
provider "netlify" {
  token = var.netlify_token
}

variable "github_owner" {
      type=string
      default = "nikolamirilo"
}
variable "github_token" {
      type=string
      default = ""
}

provider "github" {
  owner = var.github_owner
  token = var.github_token
}

resource "netlify_deploy_key" "" {
}

resource "netlify_site" "main" {
  name = "arioso-investment-ag"

  repo {
    repo_branch   = "deployment"
    command       = "gatsby build"
    deploy_key_id = netlify_deploy_key.key.id
    dir           = "/public"
    provider      = "github"
    repo_path     = data.github_repository.repo.full_name
  }
}

data "github_repository" "repo" {
  full_name = "nikolamirilo/Arioso_Investment_AG"
}

resource "github_repository_deploy_key" "key" {
  title      = "Netlify"
  repository = data.github_repository.repo.name
  key        = netlify_deploy_key.key.public_key
  read_only  = true
}