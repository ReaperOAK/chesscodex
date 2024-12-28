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

// Add YouTube video
$gallery[] = array(
    'folder' => 'YouTube Videos',
    'files' => array(
        array(
            'src' => 'https://www.youtube.com/embed/0Khob6ZL0sU',
            'type' => 'youtube',
            'alt' => 'Power of Passed Pawns- Dhruv Kar vs Soumalya Mondal | Inter Club Invitational (Nov 24)'
        )
    )
);

echo json_encode($gallery);
?>