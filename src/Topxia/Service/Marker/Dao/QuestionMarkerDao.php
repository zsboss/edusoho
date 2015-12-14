<?php

namespace Topxia\Service\Marker\Dao;

interface QuestionMarkerDao
{
    public function getQuestionMarker($id);

    public function findQuestionMarkersByIds($ids);

    public function findQuestionMarkersByMarkerId($markerId);

    public function findQuestionMarkersByQuestionId($questionId);

    public function addQuestionMarker($questionMarker);

    public function updateQuestionMarker($id, $fields);

    public function deleteQuestionMarker($id);

    public function updateQuestionMarkersSeq($markerId, $seq);

    public function searchQuestionMarkers($conditions, $orderBy, $start, $limit);
}
