-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql-emedrith.alwaysdata.net
-- Generation Time: Jun 27, 2024 at 08:02 PM
-- Server version: 10.6.17-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `emedrith_db`
--
CREATE DATABASE IF NOT EXISTS `emedrith_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `emedrith_db`;

-- --------------------------------------------------------

--
-- Table structure for table `categorias`
--

CREATE TABLE `categorias` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `fecha` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`, `fecha`) VALUES
(1, 'almacen', '2024-06-20 10:53:24'),
(2, 'frutos secos', '2024-06-20 10:53:24'),
(3, 'bolsones agroecologicos', '2024-06-20 10:54:38'),
(4, 'panaderia', '2024-06-20 10:54:38'),
(5, 'semillas', '2024-06-20 10:54:55');

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `precio` float NOT NULL,
  `stock` int(10) UNSIGNED NOT NULL,
  `categoria_id` int(10) UNSIGNED DEFAULT NULL,
  `fecha` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `stock`, `categoria_id`, `fecha`) VALUES
(1, 'pure de tomate', 1200, 15, 1, '2024-06-20 10:58:14'),
(2, 'jugo de almendras', 3300, 20, 1, '2024-06-20 11:20:23'),
(3, 'nueces', 8500, 30, 2, '2024-06-20 11:20:23'),
(4, 'almendras', 15000, 20, 2, '2024-06-20 11:22:05'),
(5, 'bolson de verduras', 10000, 15, 3, '2024-06-20 11:22:05'),
(6, 'bolson de frutas', 8000, 15, 3, '2024-06-20 11:23:19'),
(7, 'pan de masa madre', 2400, 8, 4, '2024-06-20 11:23:19'),
(8, 'pan frances', 1200, 15, 4, '2024-06-20 11:24:21'),
(9, 'sesamo', 5000, 15, 5, '2024-06-20 11:25:35'),
(10, 'girasol', 6000, 15, 5, '2024-06-20 11:25:35'),
(16, 'TESTer', 6000, 20, 5, '2024-06-26 00:35:41');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(60) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `username` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `password`, `created_at`, `username`) VALUES
(1, 'jesica24@tumail.com', 'jesi123', '2024-06-09 06:18:40', 'Jesi'),
(2, 'dario@tumail.com', 'da123', '2024-06-09 06:31:13', 'dario'),
(3, 'tomas@tumail.com', 'tom123', '2024-06-09 06:35:11', 'tomi'),
(4, 'juli@tumail.com', '', '2024-06-20 11:29:07', 'juli');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoria_id` (`categoria_id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
