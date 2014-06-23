var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
      title: 'Express',
      modSet: req.query.mod,
      host: 'http://vaseker.ru:' + require('../app').get('port') + '/',
      main: {
          url: '',
          title: 'Основной заголовок по title',
          description: 'Основное описание по description',
          og: {
              title: 'Основной заголовок по og:title',
              description: 'Основное описание по og:description'
          }
      },
      mod: [
          {
              url: '?mod=1',
              title: 'Мод 1 заголовок по title',
              description: 'Мод 1 описание по description',
              og: {
                  title: 'Мод 1 заголовок по og:title',
                  description: 'Мод 1 описание по og:description'
              }
          },
          {
              url: '?mod=2',
              title: 'Мод 2 заголовок по title',
              description: 'Мод 2 описание по description',
              og: {
                  title: 'Мод 2 заголовок по og:title',
                  description: 'Мод 2 описание по og:description'
              }
          }
      ]
  });
});

module.exports = router;
