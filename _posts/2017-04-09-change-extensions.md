---
layout: post
title: Изменение расширения множества файлов
date: 2017-04-09 13:08 +09:00
tags: shell
---

По странной причине в репозитории моего блога все посты имели до недавнего времени расширение `.markdown`. Мне стало лень писать каждый раз при создании нового поста `<что-то-что-то>.markdown`. С помощью терминала можно оперативно изменить расширение всех файлов на `.md` или на какое-либо другое. Заходим в целевую папку с помощью команды `cd` и пишем:

```shell
foreach f ( *.markdown )
  mv $f $f:r.md
end
```

А вообще оказывается для `markdown` файлов легитимны следующие расширения: `.md`, `.mkdn` и
`.markdown`.
