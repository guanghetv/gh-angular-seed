#Yangcong-Math Angular Seed (version 1.0)
## 使用说明： :bulb:
Pre: 请确保你已经安装过了grunt-cli和bower，如果没有，请执行：sudo npm -g install grunt-cli bower  完成安装
a.将Gruntfile-sample.js重命名为Gruntfile.js，把自己的喜好配置放在Gruntfile.js中，切勿改动Gruntfile-sample.js

b.在此根目录下执行npm install

c.在此根目录下执行bower install

d.执行 grunt watch

PS:更省事一些，你可以使用[Live Reload](http://livereload.com/)和它的Chrome Extension :Chrome - [Chrome Webstore](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)来实现无手动刷新

******************************************************************************************

##项目结构： :file_folder:
  app folder:存放所有按照业务逻辑功能分模块的文件夹。每个业务逻辑模块的文件夹包含了除路由之外的所有文件，比如所有业务逻辑的js文件，当前module所需要的partial(html文件)，style(less文件)等

  assets folder:一些需要引用的静态媒体资源文件

  common folder:抽离出来的公共模块

  less folder:主要存放less文件的入口main.less文件，以供grunt执行build，当然也可以存放比较公用的其他less文件（针对某个模块特定用处的less文件可以放在app folder下具体模块的文件夹的style文件夹下。PS：文件夹的名字无所谓）

  route folder:所有模块的路由配置文件，也即是每个angular module初始化文件(angular.module('ModuleName', []))。其实叫做config更合适些，但是主要config的就是route，所以这里文件夹的名字就叫做route，并且route也有“入口导向”的意思

  index.html:最终引用所有文件的index.html，单页面应用唯一的Single Page

  main.js:整个angular项目的main入口，其实也是个angular config文件

******************************************************************************************

##注意事项： :warning:
a.一定要严格遵守上述约定的文件组织方式，否则会造成build, compile，angular文件依赖加载等问题，切记：convention over configuration

b.当需要通过bower添加第三方的js lib的时候一定要在build.config.js中vendor_files的js属性进行配置，其他文件比如css等同理（当前暂不支持自动build，后续可能会考虑添加）

c.不要动index.html里的内容

******************************************************************************************

##特点： :thumbsup:
a.自动化完成基本的build, compile, compress, concat, uglify, minify等工作任务。

b.自动化完成index.html文件引用，自动化解决文件加载依赖（通过约定的目录结构而不是通过一个配置依赖关系的文件）

c.使用angular template catch提高angular build的性能

d.针对angular way的代码模块组织，复用方式

******************************************************************************************

##你的简单工作流： :memo:
【options】需要通过bower引入其他第三方的lib： a.bower install xxx；
                                                                       b.在bower.config.js中添加你需要引入的第三方的js, css, assets文件

【common】a.cd into /your/yangcong/path
                     b.grunt watch 启动  (如果不能成功启动可能需要先npm install 或者 bower install) 或者你只是想一段时间grunt build一次看一下效果； 当需要部署到生产环境的时候，执行 grunt(或者只是
                   grunt compile)也可以

******************************************************************************************

## 声明： :loudspeaker:
本项目参考ngbp，如果有一些task不明白可以参看其docs, 这里是 [项目地址](https://github.com/ngbp/ngbp)

******************************************************************************************

## Then, Coding For Fun :  :wink:

******************************************************************************************
:clap: :clap: :clap: :clap: :clap: :clap: :clap: :clap: :clap: :clap:


