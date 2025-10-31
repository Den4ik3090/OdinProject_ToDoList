const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // Главный входной файл проекта
  entry: "./src/index.js",

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    // Очищает папку 'dist' перед каждой сборкой
    clean: true,
  },

  // Для удобства отладки в браузере
  devtool: "eval-source-map",

  devServer: {
    // Запускает сервер разработки на http://localhost:8080 (по умолчанию)
    static: './dist',
    // Отслеживает изменения в HTML-файле, чтобы перезагрузить страницу
    watchFiles: ["./src/template.html"],
    open: true, // Автоматически открывает браузер
  },

  plugins: [
    new HtmlWebpackPlugin({
      // Использует ваш HTML-файл как шаблон
      template: "./src/template.html",
    }),
  ],

  module: {
    rules: [
      {
        // 1. Правило для CSS, Sass и SCSS
        test: /\.(scss|css)$/i,
        use: [
          "style-loader", // 4. Вставляет CSS в DOM (последний в цепочке)
          "css-loader",   // 3. Разрешает @import и url()
          {
            // 2. PostCSS: обработка CSS (например, Autoprefixer)
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                // Плагины PostCSS (здесь только Autoprefixer)
                plugins: [require("autoprefixer")],
              },
            },
          },
          "sass-loader", // 1. Компилирует Sass/SCSS в CSS (первый в цепочке)
        ],
      },
      {
        // 2. Правило для HTML
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        // 3. Правило для Изображений и Шрифтов
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};