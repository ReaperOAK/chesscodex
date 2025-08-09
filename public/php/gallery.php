<?php
header('Content-Type: application/json');

$galleryPath = __DIR__ . '/../galleryPics';
$folders = array_diff(scandir($galleryPath), array('.', '..'));

$gallery = array();

foreach ($folders as $folder) {
    $folderPath = $galleryPath . '/' . $folder;
    if (is_dir($folderPath)) {
        $files = array_diff(scandir($folderPath), array('.', '..'));
        $fileData = array();

        foreach ($files as $file) {
            $filePath = '/galleryPics/' . $folder . '/' . $file;
            $fileType = pathinfo($file, PATHINFO_EXTENSION) === 'mp4' ? 'video' : 'image';
            $fileData[] = array(
                'src' => $filePath,
                'type' => $fileType,
                'alt' => $file
            );
        }

        $gallery[] = array(
            'folder' => $folder,
            'files' => $fileData
        );
    }
}

// Add YouTube videos from galleryYTvideos.txt
$ytFile = __DIR__ . '/../galleryYTvideos.txt';
$ytVideos = array();
if (file_exists($ytFile)) {
    $lines = file($ytFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        // Extract src and title from iframe
        if (preg_match('/src="([^"]+)".*title="([^"]+)"/i', $line, $matches)) {
            $ytVideos[] = array(
                'src' => $matches[1],
                'type' => 'youtube',
                'alt' => htmlspecialchars($matches[2], ENT_QUOTES, 'UTF-8')
            );
        }
    }
    if (!empty($ytVideos)) {
        $gallery[] = array(
            'folder' => 'YouTube Videos',
            'files' => $ytVideos
        );
    }
}

echo json_encode($gallery);
?>