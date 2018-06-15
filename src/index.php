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
$app->get('/etape1', function() use($app) {
  $app['monolog']->addDebug('logging output.');
  return $app['twig']->render('pages/index/step1.twig');
});
$app->get('/etape2', function() use($app) {
  $app['monolog']->addDebug('logging output.');
  return $app['twig']->render('pages/index/step2.twig');
});
$app->get('/etape3', function() use($app) {
  $app['monolog']->addDebug('logging output.');
  return $app['twig']->render('pages/index/step3.twig');
});
$app->get('/etape4', function() use($app) {
  $app['monolog']->addDebug('logging output.');
  return $app['twig']->render('pages/index/step4.twig');
});
$app->get('/etape5', function() use($app) {
  $app['monolog']->addDebug('logging output.');
  return $app['twig']->render('pages/index/step5.twig');
});
$app->get('/resultats', function() use($app) {
  $app['monolog']->addDebug('logging output.');
  return $app['twig']->render('pages/index/resultats.twig');
});

$app->run();
