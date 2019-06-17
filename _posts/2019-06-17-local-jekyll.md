---
layout: post
title: Jekyll 本地环境
subtitle: 搭建步骤记录
image: https://jekyllcn.com/img/logo-2x.png
tags: [jekyll, github]
---

在本地搭建jekyll环境，可以在本地调试好网页后再push至仓库，避免无意义的commit。已经存在很多详细的教程，仅简单记录自己的搭建过程以及遇到的问题，以备后用。

---

安装 Ruby
---

1. 下载 [Rubyinstaller](https://rubyinstaller.org/downloads/)
    
    为避免出现组件/环境缺失，选择包含开发套件的安装包 **`Ruby+Devkit 2.5.5-1(x64) `**（如果版本更新，就选择右侧说明推荐的版本）。

    ![Rubyinstaller](https://raw.githubusercontent.com/Roothash41/imgContent/master/post/20190617124010.png)

2. Rubyinstaller 安装要点

    - 安装路径 **不要** 有空格
    - 勾选添加环境变量 `Add ... to PATH`
    - 勾选MSYS2
    - 安装完成后，勾选 `Run 'ridk install' to ...`

    ![安装要点](https://raw.githubusercontent.com/Roothash41/imgContent/master/post/mysy2.png)

3. Finish 后，弹出如下命令行安装界面。

    ![命令行安装界面](https://raw.githubusercontent.com/Roothash41/imgContent/master/post/finish.png)

    - 安装`3`。
    - `Install MSYS2 and MINGW development toolchain succeeded`，则安装成功。
    - cmd中，`ridk install`可重新打开安装界面。

4. cmd中，`ruby -v`查看是否安装成功。

---

安装 Jekyll
---

以下命令行操作，均在`git bash`中进行。

1.  替换 gem 默认源为[清华镜像源](https://mirror.tuna.tsinghua.edu.cn/help/rubygems/)。

2. `gem install jekyll`。  
    _显示`** gems installed`即可。_

3.  cd 至博客文件夹下， `gem install bundler`。  
    _显示`** gems installed`即可。_

4.  替换 bundler 默认源为[清华镜像源](https://mirror.tuna.tsinghua.edu.cn/help/rubygems/)。

5.  `bundle install`。如遇错误，按提示update或安装缺失/依赖文件。  
    _显示`Bundle complete!`即可。_

6.  `bundle exec jekyll serve`。显示`Server running`时，[127.0.0.1:4000](http://127.0.0.1:4000/)可运行。

---

END
---