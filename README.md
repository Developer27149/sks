oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g sks
$ sks COMMAND
running command...
$ sks (--version)
sks/0.0.0 darwin-x64 node-v14.15.5
$ sks --help [COMMAND]
USAGE
  $ sks COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`sks add NAME LINK`](#sks-add-name-link)
* [`sks go NAME`](#sks-go-name)
* [`sks help [COMMAND]`](#sks-help-command)
* [`sks ls`](#sks-ls)
* [`sks plugins`](#sks-plugins)
* [`sks plugins:install PLUGIN...`](#sks-pluginsinstall-plugin)
* [`sks plugins:inspect PLUGIN...`](#sks-pluginsinspect-plugin)
* [`sks plugins:install PLUGIN...`](#sks-pluginsinstall-plugin-1)
* [`sks plugins:link PLUGIN`](#sks-pluginslink-plugin)
* [`sks plugins:uninstall PLUGIN...`](#sks-pluginsuninstall-plugin)
* [`sks plugins:uninstall PLUGIN...`](#sks-pluginsuninstall-plugin-1)
* [`sks plugins:uninstall PLUGIN...`](#sks-pluginsuninstall-plugin-2)
* [`sks plugins update`](#sks-plugins-update)

## `sks add NAME LINK`

添加快捷方式

```
USAGE
  $ sks add [NAME] [LINK] -d <value>

ARGUMENTS
  NAME  简明好记的标志
  LINK  目标地址

FLAGS
  -d, --description=<value>  (required) 简介

DESCRIPTION
  添加快捷方式

EXAMPLES
  $ sks add name link
```

_See code: [dist/commands/add/index.ts](https://github.com/youyiqin/hello-world/blob/v0.0.0/dist/commands/add/index.ts)_

## `sks go NAME`

打开目标

```
USAGE
  $ sks go [NAME]

ARGUMENTS
  NAME  简明好记的标志

DESCRIPTION
  打开目标

EXAMPLES
  $ sks go [-l list] name
```

_See code: [dist/commands/go/index.ts](https://github.com/youyiqin/hello-world/blob/v0.0.0/dist/commands/go/index.ts)_

## `sks help [COMMAND]`

Display help for sks.

```
USAGE
  $ sks help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for sks.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `sks ls`

打印数据

```
USAGE
  $ sks ls [-c <value>]

FLAGS
  -c, --count=<value>  显示记录的数量,整数且别太大

DESCRIPTION
  打印数据

EXAMPLES
  $ sys ls [-c n]
```

_See code: [dist/commands/ls/index.ts](https://github.com/youyiqin/hello-world/blob/v0.0.0/dist/commands/ls/index.ts)_

## `sks plugins`

List installed plugins.

```
USAGE
  $ sks plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ sks plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `sks plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ sks plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ sks plugins add

EXAMPLES
  $ sks plugins:install myplugin 

  $ sks plugins:install https://github.com/someuser/someplugin

  $ sks plugins:install someuser/someplugin
```

## `sks plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ sks plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ sks plugins:inspect myplugin
```

## `sks plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ sks plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ sks plugins add

EXAMPLES
  $ sks plugins:install myplugin 

  $ sks plugins:install https://github.com/someuser/someplugin

  $ sks plugins:install someuser/someplugin
```

## `sks plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ sks plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ sks plugins:link myplugin
```

## `sks plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ sks plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ sks plugins unlink
  $ sks plugins remove
```

## `sks plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ sks plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ sks plugins unlink
  $ sks plugins remove
```

## `sks plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ sks plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ sks plugins unlink
  $ sks plugins remove
```

## `sks plugins update`

Update installed plugins.

```
USAGE
  $ sks plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
