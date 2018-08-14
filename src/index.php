<?php
error_reporting(E_ALL);
require('../vendor/autoload.php');

$app = new Silex\Application();
$app['debug'] = true;

// Register the monolog logging service
$app->register(new Silex\Provider\MonologServiceProvider(), array(
  'monolog.logfile' => 'php://stderr',
));

// Register view rendering
$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/views',
));

$app->get('/', function() use($app) {
  $app['monolog']->addDebug('logging output.');
  return $app['twig']->render('pages/index/index.twig');
});

$app->get('/magasin', function() use($app) {
  $app['monolog']->addDebug('logging output.');
  return $app['twig']->render('pages/magasin/index.twig');
});

$app->get('/univers-cuisine', function() use($app) {
  $app['monolog']->addDebug('logging output.');
  return $app['twig']->render('pages/univers-cuisine/index.twig');
});

$app->run();
