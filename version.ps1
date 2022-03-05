# update package version for develop and feature branch publishes
[CmdletBinding()]
param(
  [Parameter(Mandatory=$true)]
  [string]$build,
  [string]$prefix
)

$version = (Get-Content -Raw -Path package.json | ConvertFrom-Json).version
if($prefix) {
  $version += "-" + $prefix + "." + $build
} else { $version += "-" + $build }

npm version $version --json