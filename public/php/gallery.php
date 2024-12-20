<?php
header('Content-Type: application/json');

$galleryPath = __DIR__ . '/../gallery';
$folders = array_diff(scandir($galleryPath), array('.', '..'));

$gallery = array();

foreach ($folders as $folder) {
    $folderPath = $galleryPath . '/' . $folder;
    if (is_dir($folderPath)) {
        $files = array_diff(scandir($folderPath), array('.', '..'));
        $fileData = array();

        foreach ($files as $file) {
            $filePath = '/gallery/' . $folder . '/' . $file;
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

echo json_encode($gallery);
?>